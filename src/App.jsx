import React from 'react';
import Button from './components/ui/Button';
import Card from './components/ui/Card';
import Table from './components/ui/Table';

function App() {
  const columns = ["Course Code", "Subject Name", "Credits", "Status"];
  const data = [
    { code: "IT-301", name: "Advanced Web Development", credits: "3", status: "In Progress" },
    { code: "IT-302", name: "UI/UX Design Systems", credits: "3", status: "Completed" },
    { code: "CS-303", name: "Database Administration", credits: "4", status: "In Progress" }
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '30px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', color: '#333' }}>
      
      <header style={{ borderBottom: '2px solid #eaeaea', paddingBottom: '15px', marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ margin: '0 0 5px 0', color: '#2c3e50', fontSize: '24px' }}>BATU Student Portal</h1>
          <p style={{ margin: 0, color: '#7f8c8d', fontSize: '14px' }}>Welcome back, Amira Saad | Software & IT Department</p>
        </div>
        <div>
          <Button 
            text="Sync Data" 
            onClick={() => alert('Data synchronized successfully with cloud!')} 
            variant="primary" 
          />
        </div>
      </header>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '18px', color: '#34495e', marginBottom: '15px' }}>Semester Overview</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <Card 
            title="Graduation Project Status" 
            description="Your team is currently on track with frontend integration and component structuring." 
          />
          
          <Card title="Active Task Alert">
            <div style={{ padding: '5px 0' }}>
              <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#e74c3c' }}>⚠️ Assignment 2 deadline is approaching.</p>
              <Button 
                text="View Details" 
                onClick={() => alert('Navigating to assignment specifications...')} 
                variant="danger" 
                disabled={false} 
              />
            </div>
          </Card>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '18px', color: '#34495e', marginBottom: '15px' }}>Enrolled Courses</h2>
        <Table columns={columns} data={data} striped={true} />
      </section>

    </div>
  );
}

export default App;