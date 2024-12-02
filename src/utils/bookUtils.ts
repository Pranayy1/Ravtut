import type { ShivaniBook } from '../types/book';

export function getShivaniBooks(courseSlug: string, semester: string): ShivaniBook[] {
  const subjects: ShivaniBook[] = [];
  
  // Generate 5 subjects for each semester
  for (let i = 1; i <= 5; i++) {
    subjects.push({
      name: `Subject ${i}`,
      code: `${courseSlug.toUpperCase()}-${semester}0${i}`,
      downloadUrl: `/books/${courseSlug}/semester-${semester}/subject-${i}.pdf`
    });
  }
  
  return subjects;
}