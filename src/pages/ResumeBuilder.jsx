import  { useState,useEffect } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from '../components/ResumePDF';
import InputField from '../components/inputfileds/Resumeinputfields'; // Import the new component

const ResumeBuilder = () => {
// Scroll to top when the component is loaded
useEffect(() => {
  window.scrollTo(0, 0); // Scroll to top of the page
}, []);


  const [resumeData, setResumeData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    address: '',
    photo: null,
    summary: '',
    education: [],
    experience: [],
    skills: [],
    template: 'template1',
  });

  const handleInputChange = (field, value, section, index) => {
    if (section) {
      const updatedSection = resumeData[section].map((item, idx) =>
        idx === index ? { ...item, [field]: value } : item
      );
      setResumeData({ ...resumeData, [section]: updatedSection });
    } else {
      setResumeData({ ...resumeData, [field]: value });
    }
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, { degree: '', institution: '', year: '' }],
    });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, { role: '', company: '', year: '', details: '' }],
    });
  };

  const addSkill = (skill) => {
    if (skill && !resumeData.skills.includes(skill)) {
      setResumeData({
        ...resumeData,
        skills: [...resumeData.skills, skill],
      });
    }
  };

  const removeSkill = (index) => {
    const newSkills = [...resumeData.skills];
    newSkills.splice(index, 1);
    setResumeData({ ...resumeData, skills: newSkills });
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setResumeData({ ...resumeData, photo: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <h2 className="text-4xl font-extrabold text-blue-900 mb-8">Build Your Resume</h2>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white p-8 rounded-lg shadow-xl">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-8 pr-4">
          {/* Input Fields */}
          <div className="space-y-6">
            {['name', 'title', 'email', 'phone', 'address'].map((field) => (
              <InputField
                key={field}
                label={field}
                type={field === 'email' ? 'email' : 'text'}
                value={resumeData[field]}
                onChange={(e) => handleInputChange(field, e.target.value)}
              />
            ))}

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-blue-700 capitalize">photo</label>
              <input
                type="file"
                className="w-full p-3 border border-blue-300 rounded-lg shadow-md"
                onChange={handlePhotoUpload}
              />
            </div>

            <InputField
              label="summary"
              isTextarea={true}
              value={resumeData.summary}
              onChange={(e) => handleInputChange('summary', e.target.value)}
            />
          </div>

          {/* Skills Section */}
          <div className="space-y-6 mt-8">
            <h4 className="text-2xl font-semibold text-blue-800">Skills</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="bg-blue-50 border border-blue-300 rounded-lg p-3 text-sm flex items-center">
                  {skill}
                  <button className="ml-2 text-red-600 hover:text-red-500" onClick={() => removeSkill(index)}>x</button>
                </div>
              ))}
            </div>
            <InputField
              placeholder="Add a skill and press Enter"
              onChange={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  const skill = e.target.value.trim();
                  if (skill) {
                    addSkill(skill);
                    e.target.value = '';
                  }
                }
              }}
            />
          </div>

          {/* Choose Template */}
          <div className="mt-8">
            <div className="flex justify-center">
              <PDFDownloadLink
                document={<ResumePDF resumeData={resumeData} />}
                fileName="resume.pdf"
                className="bg-blue-900 text-white p-4 rounded-lg text-sm font-bold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
              </PDFDownloadLink>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-8 pl-4">
          {/* Education and Experience */}
          <div className="flex flex-col space-y-8">
            {/* Education Section */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-blue-800">Education</h4>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="space-y-4">
                  {['degree', 'institution', 'year'].map((field) => (
                    <InputField
                      key={field}
                      label={field}
                      value={edu[field]}
                      onChange={(e) => handleInputChange(field, e.target.value, 'education', index)}
                    />
                  ))}
                </div>
              ))}
              <button
                className="bg-blue-400 text-white p-4 rounded-lg text-sm font-bold hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={addEducation}
              >
                Add Education
              </button>
            </div>

            {/* Experience Section */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-blue-900">Experience</h4>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="space-y-4">
                  {['role', 'company', 'year', 'details'].map((field) => (
                    <InputField
                      key={field}
                      label={field}
                      type={field === 'details' ? 'textarea' : 'text'}
                      value={exp[field]}
                      onChange={(e) => handleInputChange(field, e.target.value, 'experience', index)}
                    />
                  ))}
                </div>
              ))}
              <button
                className="bg-blue-400 text-white p-4 rounded-lg text-sm font-bold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={addExperience}
              >
                Add Experience
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="w-full max-w-6xl mt-8">
        <h3 className="text-3xl font-bold text-blue-900 mb-4">Live Preview</h3>
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <PDFViewer width="100%" height="600">
            <ResumePDF resumeData={resumeData} />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
