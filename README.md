# Website for Lords Academy
This project is created using React with Typescript and Tailwind CSS.
Please refer 'https://tailwindcss.com/' for details about style sheets.

# Getting Started
To get the project up and running on your local machine, follow these steps:

Prerequisites :
Node.js and npm installed on your system.

Installation :
Clone the repository (CLI): 'git clone https://github.com/mithunmohandas2/LordsAcademy'
Navigate to the project directory
Install dependencies: 'npm install' or 'npm i'
Start the development server: 'npm run dev'

Usage :
Once the development server is running, access the Webpage in your browser at http://localhost:5173.

# Updating the website
1. Adding new routes (sub pages): 
   ● Go to : src > App.tsx  
   ● Add new route in format : "<Route path="/newRoute" element={<SubPage location={"newRoute"} />} />"
   ● Provide value for location same as route

2. Adding new Sub pages: 
   ● Create a new subpage component in src > components folder (Refer to EGGS Life component)   
   ● Go to : src > Pages > SubPages.tsx  
   ● Assign the newly added component to SubPage with specific route in the format" {location === "newRoute" && <NewComponent />}"