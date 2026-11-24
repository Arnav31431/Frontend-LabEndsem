import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const students = [
  { id: 1, name: 'Aarav Sharma', rollNo: '101', marks: 92 },
  { id: 2, name: 'Maya Patel', rollNo: '102', marks: 78 },
  { id: 3, name: 'Rohan Mehta', rollNo: '103', marks: 45 },
  { id: 4, name: 'Isha Kapoor', rollNo: '104', marks: 88 },
  { id: 5, name: 'Kabir Singh', rollNo: '105', marks: 36 },
];

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <p className="eyebrow">Academic portal</p>
            <h1>Student Results</h1>
          </div>
        </div>
        <div className="term">Semester 1 <span>•</span> 2026</div>
      </div>
    </header>
  );
}

function StudentList() {
  return (
    <main className="content">
      <div className="title-row">
        <div>
          <p className="section-label">Class overview</p>
          <h2>Student performance</h2>
        </div>
        <div className="student-count">
          <strong>{students.length}</strong>
          <span>Students</span>
        </div>
      </div>

      <div className="table-card">
        <div className="table-head">
          <span>Student</span>
          <span>Roll no.</span>
          <span>Marks</span>
          <span>Status</span>
        </div>
        <div className="student-rows">
          {students.map((student) => {
            const passed = student.marks >= 50;
            return (
              <div className="student-row" key={student.id}>
                <div className="student">
                  <div className="avatar">{student.name.charAt(0)}</div>
                  <strong>{student.name}</strong>
                </div>
                <span className="roll-no">#{student.rollNo}</span>
                <div className="marks">
                  <strong>{student.marks}</strong>
                  <span>/100</span>
                </div>
                <div>
                  <span className={`status ${passed ? 'pass' : 'fail'}`}>
                    {passed ? 'PASS' : 'Fail'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Student Portal</p>
      <p>Results published 24 November</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <StudentList />
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
