# Enfra - Terrahacks 2024 Winner 🏆
### Video demo

  Here is a video demo of Enfra

```sh
  https://www.youtube.com/watch?v=rOtl0IIPvfo
```
## Inspiration ✍🏽
Our team was inspired to build a sustainability-focused urban planning platform during our walk through the bustling streets of downtown Toronto on our way to TerraHacks. The glaring issues stemming from inadequate urban planning were impossible to ignore. Natural green spaces are being relentlessly paved over, transforming the city into a concrete jungle. The never-ending construction projects have rendered many streets almost unwalkable, and rising crime rates are a growing concern for residents and visitors alike. Witnessing these challenges firsthand ignited our passion to create a solution that addresses these environmental issues not only at an individual level but on a large, city-wide scale.

## What It Does ⚙️
Our web app offers an innovative 3D map that lets you design and plan buildings anywhere in the world. Once you've planned your urban masterpiece, we leverage a combination of APIs (MapBox, WalkScore, Google's Geocoding, and Estated) and ML models (K-Nearest Neighbors and Random Forest Regressions) to accurately predict key environmental factors. These key environmental factors include: Carbon Footprint, Trees Destroyed, Walkability, Transit Access, Bikeability, and Land Valuation. This intuitive tool streamlines your planning process, allowing you to assess and refine the environmental impact and feasibility of your construction projects without enduring lengthy municipal delays. Our solution helps you address potential environmental concerns early in the design phase, ensuring a smoother and more sustainable planning experience.

## How We Built It 🚀
Our impressive web app was developed using Next.js and TypeScript, with a sleek design powered by Tailwind CSS and ShadCN. We integrated a dynamic 3D interactive map through the MapBox API, allowing users to place and plan various building designs. For our database, we opted for SQLite.

To assess key environmental factors, we leveraged a range of machine learning models and APIs. The WalkScores API helped us evaluate walkability, bikeability, and transit access. For land evaluation, we utilized Google's Geocoding and Estate APIs. Additionally, we employed a combination of mathematical and Random Forest Regression models to calculate tree destruction and carbon footprint.

## Challenges We Faced 👨🏽‍💻
While building our project, we hit a few bumps in the road. Our biggest headache was trying to make all our APIs work together to predict key environmental factors. However, after countless cups of coffee, a lot of perseverance, and enough documentation to wallpaper a room, we finally got 4 APIs (MapBox, WalkScore, Google’s Geocoding, and Estated) to work together like a dream.

## What We’re Proud Of 🥇
We started this hackathon with no project ideas and a lot of nerves, yet after 36 hours, we built a complete full-stack application. Including 4 APIs, ML models, a great UI, and, most importantly, an idea we truly believe in. We’re incredibly proud of what we achieved this weekend and are excited to keep tackling real-world problems. We were also about create a stunning presentation with snippets to show off to the judges. 

## What We Learned 💡
Our team unanimously agrees that participating in this hackathon accelerated our learning far beyond what we could have achieved in weeks. Over the weekend, we enhanced our full-stack development skills, explored new technologies, integrated innovative APIs, and refined our machine learning and data science expertise.

## Installation Guide
### Prerequisites

  Before you begin, ensure you have the following installed on your machine:

  - [Bun](https://bun.sh/)

### Installation

  Follow the steps below to set up the project:

  1. **Clone the repository:**

     ```sh
     git clone https://github.com/sunniekapar/enfra.git
     cd enfra
     ```

  2. **Set up the frontend:**

     ```sh
     bun i
     bun run dev
     ```

     Fill in the environment variables in the `.env` file.
     
     To set up the database, head to Turso and create a new database. Fill in the values in the `.env` file. Then, in the terminal, run:

     ```sh
     bun run db:push
     ```

     This will create a database for the users, session, and buildings.

### Running the Application

  After completing the setup, you should be able to access the frontend at [http://localhost:3000](http://localhost:3000).

  
