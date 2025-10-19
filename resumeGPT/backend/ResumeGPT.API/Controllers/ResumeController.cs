using Microsoft.AspNetCore.Mvc;
using ResumeGPT.API.Models;
using ResumeGPT.API.Services;

namespace ResumeGPT.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ResumeController : ControllerBase
    {
        private readonly IOpenAIService _openAIService;
        private readonly ILogger<ResumeController> _logger;

        public ResumeController(IOpenAIService openAIService, ILogger<ResumeController> logger)
        {
            _openAIService = openAIService;
            _logger = logger;
        }

        /// <summary>
        /// Generate an optimized resume based on job description
        /// </summary>
        [HttpPost("generate")]
        public async Task<ActionResult<ResumeGenerationResponse>> GenerateResume([FromBody] ResumeGenerationRequest request)
        {
            try
            {
                if (request == null || request.ResumeData == null)
                {
                    return BadRequest("Invalid request data");
                }

                var result = await _openAIService.GenerateOptimizedResumeAsync(request);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error generating resume");
                return StatusCode(500, "An error occurred while generating the resume");
            }
        }

        /// <summary>
        /// Analyze a job description to provide insights and recommendations
        /// </summary>
        [HttpPost("analyze-job")]
        public async Task<ActionResult<JobAnalysisResponse>> AnalyzeJobDescription([FromBody] JobAnalysisRequest request)
        {
            try
            {
                if (request == null || string.IsNullOrWhiteSpace(request.JobDescription))
                {
                    return BadRequest("Job description is required");
                }

                var result = await _openAIService.AnalyzeJobDescriptionAsync(request.JobDescription);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error analyzing job description");
                return StatusCode(500, "An error occurred while analyzing the job description");
            }
        }

        /// <summary>
        /// Download resume as PDF
        /// </summary>
        [HttpPost("download-pdf")]
        public async Task<IActionResult> DownloadPdf([FromBody] ResumeData resumeData)
        {
            try
            {
                if (resumeData == null)
                {
                    return BadRequest("Resume data is required");
                }

                // For now, return a placeholder response
                // In a real implementation, you would generate a PDF here
                var pdfContent = GeneratePdfContent(resumeData);
                var bytes = System.Text.Encoding.UTF8.GetBytes(pdfContent);
                
                return File(bytes, "application/pdf", "resume.pdf");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error generating PDF");
                return StatusCode(500, "An error occurred while generating the PDF");
            }
        }

        /// <summary>
        /// Save resume data
        /// </summary>
        [HttpPost]
        public async Task<ActionResult<ResumeData>> SaveResume([FromBody] ResumeData resumeData)
        {
            try
            {
                if (resumeData == null)
                {
                    return BadRequest("Resume data is required");
                }

                // In a real implementation, you would save to a database here
                // For now, just return the data with a generated ID
                resumeData.PersonalInfo ??= new PersonalInfo();
                
                return Ok(resumeData);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error saving resume");
                return StatusCode(500, "An error occurred while saving the resume");
            }
        }

        /// <summary>
        /// Get resume by ID
        /// </summary>
        [HttpGet("{id}")]
        public async Task<ActionResult<ResumeData>> GetResume(string id)
        {
            try
            {
                // In a real implementation, you would retrieve from database
                return NotFound("Resume not found");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error retrieving resume");
                return StatusCode(500, "An error occurred while retrieving the resume");
            }
        }

        /// <summary>
        /// List all resumes
        /// </summary>
        [HttpGet]
        public async Task<ActionResult<List<ResumeData>>> ListResumes()
        {
            try
            {
                // In a real implementation, you would retrieve from database
                return Ok(new List<ResumeData>());
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error listing resumes");
                return StatusCode(500, "An error occurred while listing resumes");
            }
        }

        private string GeneratePdfContent(ResumeData resumeData)
        {
            // This is a placeholder implementation
            // In a real application, you would use a library like iTextSharp or similar
            return $@"
RESUME

{resumeData.PersonalInfo.FullName}
{resumeData.PersonalInfo.Email} | {resumeData.PersonalInfo.Phone} | {resumeData.PersonalInfo.Location}

EXPERIENCE
{string.Join("\n", resumeData.Experience.Select(e => $"{e.Position} at {e.Company} ({e.StartDate} - {(e.Current ? "Present" : e.EndDate)})"))}

EDUCATION
{string.Join("\n", resumeData.Education.Select(e => $"{e.Degree} in {e.Field} from {e.Institution}"))}

SKILLS
{string.Join(", ", resumeData.Skills)}
";
        }
    }
}

