import React from 'react';
import Button from './components/ui/Button';
import Card from './components/ui/Card';
import Table from './components/ui/Table';

function App() {
  // بيانات الجدول (مثال: قائمة طلاب أو مستخدمين)
  const columns = ["Name", "Age", "Major"];
  const data = [
    { name: "Amira", age: 21, major: "Software Engineering" },
    { name: "Omar", age: 22, major: "Computer Science" },
    { name: "Sara", age: 20, major: "Information Technology" }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Assignment 2: Reusable Components</h1>

      {/* 1. تجربة الـ Button (مطلوب مرتين على الأقل بـ props مختلفة) */}
      <section style={{ marginBottom: '20px' }}>
        <h2>Buttons Section</h2>
        <Button text="Primary Click" onClick={() => alert('Primary clicked!')} variant="primary" />
        <span style={{ margin: '0 10px' }}></span>
        <Button text="Danger Action" onClick={() => alert('Danger clicked!')} variant="danger" disabled={false} />
      </section>

      {/* 2. تجربة الـ Card (مطلوب مرتين واستخدام children في واحدة على الأقل) */}
      <section style={{ marginBottom: '20px' }}>
        <h2>Cards Section</h2>
        <Card title="Card One" description="This is a simple description for the first card." />
        
        <Card title="Card Two with Children">
          <p style={{ color: 'blue' }}>This is nested content passed via children prop!</p>
        </Card>
      </section>

      {/* 3. تجربة الـ Table (ببيانات ذات معنى وstriped) */}
      <section>
        <h2>Table Section</h2>
        <Table columns={columns} data={data} striped={true} />
      </section>
    </div>
  );
}

export default App;