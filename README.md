# Website for Lords Academy
This project is created using React with Typescript and Tailwind CSS.
Please refer 'https://tailwindcss.com/' for details about style sheets.

# Getting Started
To get the project up and running on your local machine, follow these steps:

Prerequisites :
Node.js and npm installed on your system.

Installation :
1. Clone the repository (CLI): 'git clone https://github.com/mithunmohandas2/LordsAcademy'
2. Navigate to the project directory
3. Install dependencies: 'npm install' or 'npm i'
4. Start the development server: 'npm run dev'

Usage :
Once the development server is running, access the Webpage in your browser at http://localhost:5173.

# Updating the website
Adding new routes (sub pages): 
1. Go to : src > App.tsx  
2. Add new route in format : "<Route path="/newRoute" element={<SubPage location={"newRoute"} />} />"
3. Provide value for location same as route

Adding new Sub pages: 
1. Create a new subpage component in src > components folder (Refer to EGGS Life component)   
2. Go to : src > Pages > SubPages.tsx  
3. Assign the newly added component to SubPage with specific route in the format" {location === "newRoute" && <NewComponent />}"