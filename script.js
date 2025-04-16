 // Sample job data
       // Sample job data
       const jobs = [
        {
            id: 1,
            title: "Senior Frontend Developer",
            company: "TechSolutions India",
            location: "Bangalore",
            jobType: "Full-time",
            experience: "3-5 years",
            salary: "₹18-24 LPA",
            posted: "2 days ago",
            description: "We are looking for an experienced Frontend Developer to join our growing team. You will be responsible for building the client-side of our web applications.",
            skills: ["React", "JavaScript", "TypeScript", "CSS", "HTML"]
        },
        {
            id: 2,
            title: "Data Scientist",
            company: "Analytics Pioneers",
            location: "Delhi NCR",
            jobType: "Full-time",
            experience: "2-4 years",
            salary: "₹15-20 LPA",
            posted: "1 week ago",
            description: "Join our data science team to develop models that transform business problems into analytical solutions using machine learning techniques.",
            skills: ["Python", "Machine Learning", "SQL", "Data Visualization", "Statistics"]
        },
        {
            id: 3,
            title: "UX/UI Designer",
            company: "Creative Designs",
            location: "Mumbai",
            jobType: "Full-time",
            experience: "2-5 years",
            salary: "₹12-18 LPA",
            posted: "3 days ago",
            description: "Looking for a talented UX/UI Designer who can create intuitive and engaging user experiences for our mobile and web applications.",
            skills: ["Figma", "User Research", "Wireframing", "Prototyping", "UI Design"]
        },
        {
            id: 4,
            title: "DevOps Engineer",
            company: "CloudTech Solutions",
            location: "Hyderabad",
            jobType: "Full-time",
            experience: "3-6 years",
            salary: "₹16-25 LPA",
            posted: "5 days ago",
            description: "Join our team to implement and manage CI/CD pipelines, automate deployment processes, and maintain cloud infrastructure.",
            skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"]
        },
        {
            id: 5,
            title: "Marketing Manager",
            company: "BrandGrowth",
            location: "Chennai",
            jobType: "Full-time",
            experience: "4-7 years",
            salary: "₹14-22 LPA",
            posted: "4 days ago",
            description: "We're looking for a Marketing Manager to develop and implement marketing strategies to promote our products and services.",
            skills: ["Digital Marketing", "Campaign Management", "SEO", "Social Media", "Analytics"]
        },
        {
            id: 6,
            title: "Financial Analyst",
            company: "GrowthCapital",
            location: "Pune",
            jobType: "Full-time",
            experience: "2-5 years",
            salary: "₹10-15 LPA",
            posted: "1 week ago",
            description: "Join our finance team to analyze financial data, prepare reports, and provide insights to support business decision-making.",
            skills: ["Financial Modeling", "Excel", "Data Analysis", "Accounting", "Forecasting"]
        }
    ];
    
    // DOM Elements
    const jobListingsContainer = document.getElementById('job-listings');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const applyModal = document.getElementById('apply-modal');
    const applyJobTitle = document.getElementById('apply-job-title');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const filterItems = document.querySelectorAll('.filter-item');
    const searchInput = document.querySelector('.search-bar input');
    const locationSelect = document.querySelector('.search-bar select');
    const searchButton = document.querySelector('.search-bar button');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const applyForm = document.getElementById('apply-form');
    const toast = document.getElementById('toast');
    const loader = document.getElementById('loader');
    const employerBtn = document.querySelector('.employer-btn');
    const jobseekerBtn = document.querySelector('.jobseeker-btn');
    
    // Initialize the page
    document.addEventListener('DOMContentLoaded', () => {
        displayJobs(jobs);
        setupEventListeners();
    });
    
    // Display jobs function
    function displayJobs(jobsToDisplay) {
        jobListingsContainer.innerHTML = '';
        
        if (jobsToDisplay.length === 0) {
            jobListingsContainer.innerHTML = '<div class="no-jobs">No jobs match your criteria. Try adjusting your filters.</div>';
            return;
        }
        
        jobsToDisplay.forEach(job => {
            const jobCard = createJobCard(job);
            jobListingsContainer.appendChild(jobCard);
        });
    }
    
    // Create job card element
    function createJobCard(job) {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        
        // Generate skills HTML
        const skillsHTML = job.skills.map(skill => `<div class="skill">${skill}</div>`).join('');
        
        jobCard.innerHTML = `
            <div class="job-card-header">
                <div class="company-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 7h-9"></path>
                        <path d="M14 17H5"></path>
                        <circle cx="17" cy="17" r="3"></circle>
                        <circle cx="7" cy="7" r="3"></circle>
                    </svg>
                </div>
                <div>
                    <h3 class="job-title">${job.title}</h3>
                    <p class="company-name">${job.company}</p>
                </div>
            </div>
            <div class="job-card-body">
                <div class="job-details">
                    <div class="job-detail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        ${job.location}
                    </div>
                    <div class="job-detail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v4.34"></path>
                            <polygon points="3 15 10 15 10 3 3 3 3 15"></polygon>
                        </svg>
                        ${job.jobType}
                    </div>
                    <div class="job-detail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                        ${job.experience}
                    </div>
                    <div class="job-detail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        ${job.posted}
                    </div>
                </div>
                <p class="job-desc">${job.description}</p>
                <div class="skills">
                    ${skillsHTML}
                </div>
            </div>
            <div class="job-card-footer">
                <div class="salary">${job.salary}</div>
                <button class="apply-btn" data-id="${job.id}" data-title="${job.title}">Apply Now</button>
            </div>
        `;
        
        return jobCard;
    }
    
    // Setup all event listeners
    function setupEventListeners() {
        // Login modal
        loginBtn.addEventListener('click', () => {
            openModal(loginModal);
        });
        
        // Signup modal
        signupBtn.addEventListener('click', () => {
            openModal(signupModal);
        });
        
        // Close modals
        closeModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                closeAllModals();
            });
        });
        
        // Close modal on outside click
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                closeAllModals();
            }
        });
        
        // Filter jobs
        filterItems.forEach(item => {
            item.addEventListener('click', () => {
                // Update active state
                filterItems.forEach(filter => filter.classList.remove('active'));
                item.classList.add('active');
                
                // Filter jobs
                const filterValue = item.textContent.toLowerCase();
                filterAndDisplayJobs(filterValue);
            });
        });
        
        // Search jobs
        searchButton.addEventListener('click', searchJobs);
        
        // Job application
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('apply-btn')) {
                const jobId = e.target.getAttribute('data-id');
                const jobTitle = e.target.getAttribute('data-title');
                openJobApplication(jobId, jobTitle);
            }
        });
        
        // Form submissions
        loginForm.addEventListener('submit', handleLoginSubmit);
        signupForm.addEventListener('submit', handleSignupSubmit);
        applyForm.addEventListener('submit', handleApplicationSubmit);
        
        // CTA buttons
        employerBtn.addEventListener('click', () => {
            openModal(signupModal);
            document.getElementById('signup-type').value = 'employer';
        });
        
        jobseekerBtn.addEventListener('click', () => {
            openModal(signupModal);
            document.getElementById('signup-type').value = 'jobseeker';
        });
    }
    
    // Filter jobs based on filter type
    function filterAndDisplayJobs(filterValue) {
        if (filterValue === 'all') {
            displayJobs(jobs);
            return;
        }
        
        const filteredJobs = jobs.filter(job => {
            const lowerTitle = job.title.toLowerCase();
            const lowerCompany = job.company.toLowerCase();
            const lowerLocation = job.location.toLowerCase();
            const lowerJobType = job.jobType.toLowerCase();
            const lowerSkills = job.skills.map(skill => skill.toLowerCase());
            
            return (
                lowerTitle.includes(filterValue) ||
                lowerCompany.includes(filterValue) ||
                lowerLocation.includes(filterValue) ||
                lowerJobType.includes(filterValue) ||
                lowerSkills.includes(filterValue)
            );
        });
        
        displayJobs(filteredJobs);
    }
    
    // Search jobs
    function searchJobs() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const locationTerm = locationSelect.value.toLowerCase();
        
        const searchedJobs = jobs.filter(job => {
            const matchesSearch = !searchTerm || 
                job.title.toLowerCase().includes(searchTerm) ||
                job.company.toLowerCase().includes(searchTerm) ||
                job.description.toLowerCase().includes(searchTerm) ||
                job.skills.some(skill => skill.toLowerCase().includes(searchTerm));
                
            const matchesLocation = !locationTerm || 
                job.location.toLowerCase().includes(locationTerm);
                
            return matchesSearch && matchesLocation;
        });
        
        displayJobs(searchedJobs);
    }
    
    // Open job application modal
    function openJobApplication(jobId, jobTitle) {
        applyJobTitle.textContent = jobTitle;
        openModal(applyModal);
    }
    
    // Modal functions
    function openModal(modal) {
        closeAllModals(); // Ensure all other modals are closed
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    function closeAllModals() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
        document.body.style.overflow = 'auto'; // Enable scrolling
    }
    
    // Form handling functions
    function handleLoginSubmit(e) {
        e.preventDefault();
        showLoader();
        
        // Simulate API call
        setTimeout(() => {
            hideLoader();
            closeAllModals();
            showToast('Login successful!');
            
            // Update UI for logged-in state (simplified)
            document.querySelector('.auth-buttons').innerHTML = `
                <button class="login-btn">My Account</button>
            `;
        }, 1500);
    }
    
    function handleSignupSubmit(e) {
        e.preventDefault();
        showLoader();
        
        // Simulate API call
        setTimeout(() => {
            hideLoader();
            closeAllModals();
            showToast('Account created successfully!');
            
            // Update UI for logged-in state (simplified)
            document.querySelector('.auth-buttons').innerHTML = `
                <button class="login-btn">My Account</button>
            `;
        }, 1500);
    }
    
    function handleApplicationSubmit(e) {
        e.preventDefault();
        showLoader();
        
        // Simulate API call
        setTimeout(() => {
            hideLoader();
            closeAllModals();
            showToast('Application submitted successfully!');
            
            // Reset form
            applyForm.reset();
        }, 2000);
    }
    
    // Toast notification
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
    
    // Loader functions
    function showLoader() {
        loader.style.display = 'block';
    }
    
    function hideLoader() {
        loader.style.display = 'none';
    }
    
    // Adding event listeners for Enter key in search
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchJobs();
        }
    });
    
    // Mobile menu toggle for responsive design
    const mobileMenuToggle = () => {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelector('.nav-links');
        
        if (window.innerWidth <= 768) {
            // Add mobile menu toggle functionality
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        }
    };
    
    // Initialize with current jobs in featured location
    const initializeWithFeatured = () => {
        const featuredJobs = jobs.filter(job => job.location === 'Bangalore');
        
        if (featuredJobs.length > 0) {
            // Highlight featured jobs initially
            displayJobs(featuredJobs);
        } else {
            // Fall back to all jobs
            displayJobs(jobs);
        }
    };
    
    // Save job functionality
    const setupSaveJobFeature = () => {
        // This would be implemented for logged in users
        // Showing the concept here
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('save-job-btn')) {
                const jobId = e.target.getAttribute('data-id');
                // Update UI to show saved state
                e.target.innerHTML = '★ Saved';
                e.target.classList.add('saved');
                
                showToast('Job saved to your profile!');
            }
        });
    };
    
    // Job alerts subscription
    const subscribeToJobAlerts = (email) => {
        showLoader();
        
        // Simulate API call
        setTimeout(() => {
            hideLoader();
            showToast('Subscribed to job alerts!');
        }, 1500);
    };
    
    // Add event listener to footer subscribe button
    document.querySelector('.footer-subscribe button').addEventListener('click', () => {
        const email = document.querySelector('.footer-subscribe input').value;
        if (email && email.includes('@')) {
            subscribeToJobAlerts(email);
            document.querySelector('.footer-subscribe input').value = '';
        } else {
            showToast('Please enter a valid email address');
        }
    });