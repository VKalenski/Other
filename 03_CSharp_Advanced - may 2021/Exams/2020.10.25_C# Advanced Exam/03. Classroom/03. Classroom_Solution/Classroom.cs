using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ClassroomProject
{
    internal class Classroom
    {
        private List<Student> students;

        public Classroom(int capacity)
        {
            Capacity = capacity;
            students = new List<Student>();
        }
        public int Capacity { get; set; }
        public int Count 
        { 
            get
            {
                return students.Count;
            }
        }

        public string RegisterStudent(Student student)
        {
            if (Count >= Capacity)
            {
                return "No seats in the classroom";
            }

            students.Add(student);
            return $"Added student {student.FirstName} {student.LastName}";
        }

        public string DismissStudent(string firstName, string lastName)
        {
            bool isStudentExisted = students.Exists(x => x.FirstName == firstName && x.LastName == lastName);
            if (isStudentExisted)
            {
                students.Remove(students.FirstOrDefault(x => x.FirstName == firstName && x.LastName == lastName));
                return $"Dismissed student {firstName} {lastName}";
            }

            return "Student not found";
        }

        public string GetSubjectInfo(string subject)
        {
            var studentSubject = students.Where(x => x.Subject == subject).ToList();
            if (studentSubject.Count > 0)
            {
                StringBuilder sb = new StringBuilder();
                sb.AppendLine($"Subject: {subject}");
                sb.AppendLine("Students:");
                foreach (Student student in studentSubject)
                {
                    sb.AppendLine($"{student.FirstName} {student.LastName}");
                }

                return sb.ToString().TrimEnd();
            }

            return $"No students enrolled for the subject";
        }

        public Student GetStudent(string firstName, string lastName) => students.FirstOrDefault(x => x.FirstName == firstName && x.LastName == lastName);
    }
}
