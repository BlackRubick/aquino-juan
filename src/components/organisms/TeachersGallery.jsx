import TeacherCard from '../molecules/TeacherCard.jsx';
import './TeachersGallery.css';

export default function TeachersGallery({ teachers = [], onSelect }) {
  const handleSelect = (teacher) => {
    console.log('Teacher selected:', teacher);
    if (onSelect) {
      onSelect(teacher);
    }
  };

  return (
    <section className="teachers-gallery">
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} {...teacher} onClickDetail={() => handleSelect(teacher)} />
      ))}
    </section>
  );
}
