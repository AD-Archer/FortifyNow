# FortifyNow: Cybersecurity Education Site
![Vercel Deploy](https://deploy-badge.vercel.app/vercel/fortify-now?name=Website)
--
**Project Repository**: [FortifyNow on GitHub](https://github.com/AD-Archer/FortifyNow)  
**Wireframe**: [FortifyNow Wireframe on Figma](https://www.figma.com/design/0zgf6t27bsBnxU3dCALsmT/FortifyNow?node-id=0-1&t=6a4APbm8cTAFTNLp-1)

## Overview

FortifyNow is an educational platform designed to help users understand the fundamentals of cybersecurity, including password management, two-factor authentication (2FA), USB security keys, and more. The site also integrates the "Have I Been Pwned" API, allowing users to check if their accounts have been part of any known data breaches.

## Key Features

- **Password Management**: A module explaining why strong passwords are essential, how to create them, and tools for managing them securely.
- **Two-Factor Authentication (2FA)**: An educational section introducing 2FA, why it’s important, and guidance on how to enable it.
- **USB Security Keys**: Explains the role of USB keys in secure authentication.
- **Data Breach Check**: Integration with the "Have I Been Pwned" API, allowing users to verify if their credentials have been compromised.

## Project Goals

FortifyNow aims to improve cybersecurity awareness among users, providing straightforward information and actionable tips to enhance personal online security.

## Technologies Used

- **Frontend**: HTML, CSS (using Tailwind), JavaScript
- **API Integration**: "Have I Been Pwned" API for real-time breach checks
- **Design Tool**: Figma for wireframes and UI planning

## Getting Started

### Prerequisites

- **Python 3.x**
- **Flask**: Install Flask via pip with `pip install flask`
- **Tailwind CSS**: Optional, for custom styling.

### Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/AD-Archer/FortifyNow.git
   ```
2. Navigate to the project directory:
   ```bash
   cd FortifyNow
   ```
3. Install the necessary dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Add your "Have I Been Pwned" API key in a `.env` file:
   ```
   HIBP_API_KEY=your_api_key_here
   ```

5. Run the Flask application:
   ```bash
   flask run
   ```

### Wireframe and Design Reference

You can view the initial wireframe for the website on Figma: [FortifyNow Wireframe](https://www.figma.com/design/0zgf6t27bsBnxU3dCALsmT/FortifyNow?node-id=0-1&t=6a4APbm8cTAFTNLp-1)

## Project Structure

```
FortifyNow/
├── static/                 # CSS, JS, and image files
├── templates/              # HTML templates
├── .env                    # API keys and other environment variables
├── requirements.txt        # Project dependencies
└── README.md               # Project documentation
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to discuss any changes or improvements.

## License

This project is open-source and available under the MIT License.
