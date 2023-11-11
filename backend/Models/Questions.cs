using System.Collections.Generic;

namespace backend.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Query { get; set; }
        public List<string> Answers { get; set; }
        public string CorrectAnswer { get; set; }
    }
}