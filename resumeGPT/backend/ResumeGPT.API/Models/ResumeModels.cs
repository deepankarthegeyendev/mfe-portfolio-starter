using System.ComponentModel.DataAnnotations;

namespace ResumeGPT.API.Models
{
    public class PersonalInfo
    {
        [Required]
        public string FullName { get; set; } = string.Empty;
        
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
        
        [Required]
        public string Phone { get; set; } = string.Empty;
        
        [Required]
        public string Location { get; set; } = string.Empty;
        
        public string? LinkedIn { get; set; }
        public string? GitHub { get; set; }
        public string? Website { get; set; }
    }

    public class Experience
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        
        [Required]
        public string Company { get; set; } = string.Empty;
        
        [Required]
        public string Position { get; set; } = string.Empty;
        
        public string? Location { get; set; }
        
        [Required]
        public string StartDate { get; set; } = string.Empty;
        
        public string? EndDate { get; set; }
        
        public bool Current { get; set; }
        
        public string? Description { get; set; }
        
        public List<string> Achievements { get; set; } = new List<string>();
    }

    public class Education
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        
        [Required]
        public string Institution { get; set; } = string.Empty;
        
        [Required]
        public string Degree { get; set; } = string.Empty;
        
        [Required]
        public string Field { get; set; } = string.Empty;
        
        public string? Location { get; set; }
        
        [Required]
        public string StartDate { get; set; } = string.Empty;
        
        public string? EndDate { get; set; }
        
        public bool Current { get; set; }
        
        public string? Gpa { get; set; }
        
        public List<string> Achievements { get; set; } = new List<string>();
    }

    public class ResumeData
    {
        [Required]
        public PersonalInfo PersonalInfo { get; set; } = new PersonalInfo();
        
        public List<Experience> Experience { get; set; } = new List<Experience>();
        
        public List<Education> Education { get; set; } = new List<Education>();
        
        public List<string> Skills { get; set; } = new List<string>();
        
        public string? JobDescription { get; set; }
    }

    public class JobAnalysisRequest
    {
        [Required]
        public string JobDescription { get; set; } = string.Empty;
    }

    public class JobAnalysisResponse
    {
        public List<string> RequiredSkills { get; set; } = new List<string>();
        public List<string> SuggestedSkills { get; set; } = new List<string>();
        public List<string> MissingSkills { get; set; } = new List<string>();
        public List<string> ExperienceGaps { get; set; } = new List<string>();
        public List<string> Recommendations { get; set; } = new List<string>();
    }

    public class ResumeGenerationRequest
    {
        [Required]
        public ResumeData ResumeData { get; set; } = new ResumeData();
        
        [Required]
        public string JobDescription { get; set; } = string.Empty;
    }

    public class ResumeGenerationResponse
    {
        public ResumeData OptimizedResume { get; set; } = new ResumeData();
        public List<string> Improvements { get; set; } = new List<string>();
        public string Analysis { get; set; } = string.Empty;
    }
}

