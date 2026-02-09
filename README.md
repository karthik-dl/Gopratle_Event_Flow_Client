Tech Stack
1. Next.js (App Router)
2. React
3. TypeScript
4. Fetch API

Project Objective
The goal of this frontend is to:
1. Collect event requirement details through a multi-step form
2. Dynamically change form steps based on user selection
3. Send structured data to the backend for storage in MongoDB
4. Clearly categorize requirements by type (planner / performer / crew)

Application Flow Overview:
The entire flow is implemented inside a single page using a step-based approach.
     Step 1 → Step 2 → Step 3 → Step 4 → Submit
Only one step is visible at a time, controlled by a step state variable.


Step 1: Event Details
In the first step, the user enters basic event information.
Inputs collected:
    Event Name
    Event Type (Wedding, Concert, Corporate, etc.)
    Event Date
    Location (City)
    Venue (optional)
These values are stored in a shared formData state object and carried forward through all steps.

Step 2: Select Who to Hire
In the second step, the user selects who they want to hire.
Options:
    Event Planner
    Performer
    Crew
The selected option is stored as:
    hireType: "planner" | "performer" | "crew"
This value determines the behavior of the next step.

Step 3: Conditional Requirement Details
The third step is dynamic and changes based on the selected hireType.
Conditional inputs:
    Event Planner
    Budget range
    Performer
    Performer type (DJ, Singer, Band)
    Performance duration
    Crew
    Crew type (Photography, Lighting, Security)
    Number of people required

Only the relevant inputs are shown based on the user’s selection.
The collected data is stored inside a flexible details object.
This conditional rendering is the core requirement of the assignment.

Step 4: Review & Submit
In the final step, the user is shown a review screen displaying all collected data.
The data shown is exactly what will be sent to the backend On clicking Submit, the data is sent via a POST request to the backend API.
The backend stores the data in MongoDB and categorizes it using hireType

Example Data Sent to Backend

{
  "eventName": "College Fest",
  "eventType": "College Event",
  "location": "Mysore",
  "hireType": "performer",
  "details": {
    "performerType": "DJ",
    "duration": "3 hours"
  }
}


Installation & Setup

Follow the steps below to run the frontend locally.
Prerequisites
    Node.js (LTS version)
    npm

Verify installation:
    node -v
    npm -v

Clone the Repository
    git clone <your-github-repo-url>
    cd requirement-posting/client

Install Dependencies
    npm install

Run the Application
    npm run dev