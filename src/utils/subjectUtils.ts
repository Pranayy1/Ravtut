import type { Subject } from '../types/course';

export function getSubjects(courseSlug: string, semester: string): Subject[] {
  // This is a placeholder function that would typically fetch data from an API or database
  // For now, returning sample data
  return [
    {
      name: 'Data Structures',
      code: 'CS-201',
      resources: [
        {
          name: 'Unit 1-5 Notes',
          type: 'notes',
          url: '/resources/cs-201-notes.pdf'
        },
        {
          name: 'Shivani Publication Book',
          type: 'book',
          url: '/resources/cs-201-book.pdf'
        },
        {
          name: 'Course Syllabus',
          type: 'syllabus',
          url: '/resources/cs-201-syllabus.pdf'
        }
      ]
    },
    // Add more subjects as needed
  ];
}