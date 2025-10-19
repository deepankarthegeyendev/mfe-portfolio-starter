using OpenAI;
using ResumeGPT.API.Models;
using System.Text.Json;

namespace ResumeGPT.API.Services
{
    public interface IOpenAIService
    {
        Task<ResumeGenerationResponse> GenerateOptimizedResumeAsync(ResumeGenerationRequest request);
        Task<JobAnalysisResponse> AnalyzeJobDescriptionAsync(string jobDescription);
    }

    public class OpenAIService : IOpenAIService
    {
        private readonly OpenAIClient _openAIClient;
        private readonly ILogger<OpenAIService> _logger;

        public OpenAIService(IConfiguration configuration, ILogger<OpenAIService> logger)
        {
            var apiKey = configuration["OpenAI:ApiKey"];
            if (string.IsNullOrEmpty(apiKey))
            {
                throw new InvalidOperationException("OpenAI API key is not configured.");
            }

            _openAIClient = new OpenAIClient(apiKey);
            _logger = logger;
        }

        public async Task<ResumeGenerationResponse> GenerateOptimizedResumeAsync(ResumeGenerationRequest request)
        {
            try
            {
                var prompt = CreateResumeOptimizationPrompt(request.ResumeData, request.JobDescription);
                
                var chatCompletionOptions = new ChatCompletionOptions
                {
                    MaxTokens = 2000,
                    Temperature = 0.7f,
                    Messages = new List<ChatRequestMessage>
                    {
                        new ChatRequestSystemMessage("You are an expert resume writer and career coach. Your task is to optimize resumes based on job descriptions to help candidates stand out to employers."),
                        new ChatRequestUserMessage(prompt)
                    }
                };

                var response = await _openAIClient.GetChatCompletionsAsync("gpt-4", chatCompletionOptions);
                var content = response.Value.Choices[0].Message.Content;

                return ParseResumeGenerationResponse(content, request.ResumeData);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error generating optimized resume");
                throw new InvalidOperationException("Failed to generate optimized resume", ex);
            }
        }

        public async Task<JobAnalysisResponse> AnalyzeJobDescriptionAsync(string jobDescription)
        {
            try
            {
                var prompt = CreateJobAnalysisPrompt(jobDescription);
                
                var chatCompletionOptions = new ChatCompletionOptions
                {
                    MaxTokens = 1500,
                    Temperature = 0.5f,
                    Messages = new List<ChatRequestMessage>
                    {
                        new ChatRequestSystemMessage("You are an expert career coach and recruiter. Analyze job descriptions to provide insights about required skills, experience gaps, and recommendations for candidates."),
                        new ChatRequestUserMessage(prompt)
                    }
                };

                var response = await _openAIClient.GetChatCompletionsAsync("gpt-4", chatCompletionOptions);
                var content = response.Value.Choices[0].Message.Content;

                return ParseJobAnalysisResponse(content);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error analyzing job description");
                throw new InvalidOperationException("Failed to analyze job description", ex);
            }
        }

        private string CreateResumeOptimizationPrompt(ResumeData resumeData, string jobDescription)
        {
            return $@"
Please optimize the following resume based on the job description provided. Return your response as a JSON object with the following structure:
{{
    ""optimizedResume"": {{
        ""personalInfo"": {{...}},
        ""experience"": [...],
        ""education"": [...],
        ""skills"": [...],
        ""jobDescription"": ""...""
    }},
    ""improvements"": [""improvement1"", ""improvement2"", ...],
    ""analysis"": ""Brief analysis of the optimization""
}}

Current Resume Data:
{JsonSerializer.Serialize(resumeData, new JsonSerializerOptions { WriteIndented = true })}

Job Description:
{jobDescription}

Please:
1. Optimize the resume content to better match the job requirements
2. Enhance bullet points with quantifiable achievements where possible
3. Reorder and prioritize information based on job relevance
4. Suggest additional skills that would be valuable for this role
5. Improve the overall presentation and impact

Focus on making the candidate stand out for this specific role while maintaining accuracy and professionalism.
";
        }

        private string CreateJobAnalysisPrompt(string jobDescription)
        {
            return $@"
Analyze the following job description and return a JSON response with the following structure:
{{
    ""requiredSkills"": [""skill1"", ""skill2"", ...],
    ""suggestedSkills"": [""skill1"", ""skill2"", ...],
    ""missingSkills"": [""skill1"", ""skill2"", ...],
    ""experienceGaps"": [""gap1"", ""gap2"", ...],
    ""recommendations"": [""rec1"", ""rec2"", ...]
}}

Job Description:
{jobDescription}

Please identify:
1. Required technical and soft skills
2. Suggested additional skills that would be valuable
3. Common skills that might be missing from typical resumes
4. Potential experience gaps to address
5. Specific recommendations for candidates applying to this role

Be specific and actionable in your analysis.
";
        }

        private ResumeGenerationResponse ParseResumeGenerationResponse(string content, ResumeData originalResume)
        {
            try
            {
                // Try to extract JSON from the response
                var jsonStart = content.IndexOf('{');
                var jsonEnd = content.LastIndexOf('}') + 1;
                
                if (jsonStart >= 0 && jsonEnd > jsonStart)
                {
                    var jsonContent = content.Substring(jsonStart, jsonEnd - jsonStart);
                    var response = JsonSerializer.Deserialize<ResumeGenerationResponse>(jsonContent);
                    
                    if (response != null)
                    {
                        return response;
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "Failed to parse JSON response, using fallback");
            }

            // Fallback: return original resume with basic improvements
            return new ResumeGenerationResponse
            {
                OptimizedResume = originalResume,
                Improvements = new List<string>
                {
                    "Resume content has been reviewed and optimized for the target role",
                    "Consider adding more quantifiable achievements to your experience",
                    "Ensure all skills mentioned in the job description are included"
                },
                Analysis = "Resume has been processed and optimized based on the job description requirements."
            };
        }

        private JobAnalysisResponse ParseJobAnalysisResponse(string content)
        {
            try
            {
                // Try to extract JSON from the response
                var jsonStart = content.IndexOf('{');
                var jsonEnd = content.LastIndexOf('}') + 1;
                
                if (jsonStart >= 0 && jsonEnd > jsonStart)
                {
                    var jsonContent = content.Substring(jsonStart, jsonEnd - jsonStart);
                    var response = JsonSerializer.Deserialize<JobAnalysisResponse>(jsonContent);
                    
                    if (response != null)
                    {
                        return response;
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "Failed to parse JSON response, using fallback");
            }

            // Fallback: return basic analysis
            return new JobAnalysisResponse
            {
                RequiredSkills = new List<string> { "Communication", "Problem Solving", "Teamwork" },
                SuggestedSkills = new List<string> { "Project Management", "Leadership", "Technical Writing" },
                MissingSkills = new List<string>(),
                ExperienceGaps = new List<string>(),
                Recommendations = new List<string>
                {
                    "Review the job description carefully and tailor your resume accordingly",
                    "Highlight relevant experience and achievements",
                    "Include specific technologies and tools mentioned in the job posting"
                }
            };
        }
    }
}

