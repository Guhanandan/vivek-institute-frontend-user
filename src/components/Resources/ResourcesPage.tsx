import React from 'react';
import { FileText, Download, Video, BookOpen, Clock, ExternalLink } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'video' | 'practice';
  subject: string;
  description: string;
  size?: string;
  duration?: string;
  downloadUrl?: string;
  previewUrl?: string;
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'JEE Physics Formula Sheet',
    type: 'pdf',
    subject: 'Physics',
    description: 'Comprehensive formula sheet covering all important topics for JEE Physics',
    size: '2.5 MB',
    downloadUrl: '#',
    previewUrl: '#'
  },
  {
    id: '2',
    title: 'Organic Chemistry Mechanisms',
    type: 'video',
    subject: 'Chemistry',
    description: 'Detailed explanation of important organic chemistry reaction mechanisms',
    duration: '45 minutes',
    previewUrl: '#'
  },
  {
    id: '3',
    title: 'Mathematics Practice Problems',
    type: 'practice',
    subject: 'Mathematics',
    description: 'Collection of practice problems for Calculus and Algebra',
    downloadUrl: '#',
    previewUrl: '#'
  }
];

const ResourcesPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl p-8 mb-12">
        <h1 className="text-3xl font-bold mb-4">Study Resources</h1>
        <p className="text-lg opacity-90">
          Access comprehensive study materials, practice questions, and video lectures
        </p>
      </div>

      <div className="grid gap-6">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {resource.type === 'pdf' && (
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-red-600" />
                      </div>
                    )}
                    {resource.type === 'video' && (
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Video className="w-6 h-6 text-blue-600" />
                      </div>
                    )}
                    {resource.type === 'practice' && (
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-green-600" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-lg font-semibold">{resource.title}</h3>
                      <p className="text-sm text-gray-500">{resource.subject}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    {resource.size && (
                      <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        <span>{resource.size}</span>
                      </div>
                    )}
                    {resource.duration && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{resource.duration}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  {resource.downloadUrl && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  )}
                  {resource.previewUrl && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span>Preview</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;