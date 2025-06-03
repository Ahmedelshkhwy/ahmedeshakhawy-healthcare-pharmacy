const fs = require('fs');
const path = require('path');

const structure = {
  frontend: {
    'index.html': '',
    assets: {
      css: { 'style.css': '' },
      js: { 'main.js': '' },
      images: {
        'logo.png': '',
        'banners.txt': 'placeholder for banners and icons'
      }
    },
    components: {
      'header.html': '',
      'footer.html': '',
      'filters.html': ''
    },
    'medical-center': {
      services: {
        'services.html': '',
        'services.css': '',
        'services.js': ''
      },
      doctors: {
        'doctors.html': '',
        'doctors.css': '',
        'doctors.js': ''
      },
      'health-tips': {
        'tips.html': '',
        'tips.css': '',
        'tips.js': ''
      }
    },
    pharmacy: {
      skincare: {
        'skincare.html': '',
        'skincare.css': '',
        'skincare.js': ''
      },
      haircare: {
        'haircare.html': '',
        'haircare.css': '',
        'haircare.js': ''
      },
      'baby-care': {
        'baby.html': '',
        'baby.css': '',
        'baby.js': ''
      },
      'oral-care': {
        'oral.html': '',
        'oral.css': '',
        'oral.js': ''
      },
      chronic: {
        'chronic.html': '',
        'chronic.css': '',
        'chronic.js': ''
      },
      seasonal: {
        'seasonal.html': '',
        'seasonal.css': '',
        'seasonal.js': ''
      },
      'mom-care': {
        'index.html': '',
        'style.css': '',
        'script.js': ''
      },
      'men-care': {
        'index.html': '',
        'style.css': '',
        'script.js': ''
      },
      obesity: {
        'index.html': '',
        'style.css': '',
        'script.js': ''
      }
    },
    pages: {
      'about.html': '',
      'contact.html': '',
      'faq.html': '',
      'privacy-policy.html': ''
    },
    forms: {
      'registration-form.html': '',
      'appointment-form.html': '',
      'contact-form.html': ''
    },
    profile: {
      'patient-profile.html': '',
      'doctor-profile.html': ''
    },
    search: {
      'search.html': ''
    }
  },
  backend: {
    'server.js': '',
    routes: {
      'authRoutes.js': '',
      'appointmentRoutes.js': '',
      'doctorRoutes.js': '',
      'patientRoutes.js': ''
    },
    controllers: {
      'authController.js': '',
      'appointmentController.js': '',
      'doctorController.js': '',
      'patientController.js': ''
    },
    models: {
      'User.js': '',
      'PatientProfile.js': '',
      'DoctorProfile.js': '',
      'Appointment.js': '',
      'ContactMessage.js': '',
      'MedicalRecord.js': ''
    },
    config: {
      'db.js': ''
    },
    middlewares: {
      'authMiddleware.js': '',
      'errorMiddleware.js': ''
    }
  },
  '.gitignore': '',
  'package.json': '',
  'README.md': ''
};

function createStructure(basePath, obj) {
  for (const name in obj) {
    const currentPath = path.join(basePath, name);
    if (typeof obj[name] === 'string') {
      fs.writeFileSync(currentPath, obj[name]);
    } else {
      fs.mkdirSync(currentPath, { recursive: true });
      createStructure(currentPath, obj[name]);
    }
  }
}

createStructure(process.cwd(), structure);
console.log('✅ Project structure created successfully!');