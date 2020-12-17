# EarthBFF Planning Documents


## User stories

### MVP
- As a user, I want to take a quiz about my daily habits and lifestyle choices to see how they are related to climate change.
- As a user, I want to understand my carbon footprint in order to make more environmentally friendly decisions.
- As a user, I want to take a quiz that returns recommendations for reducing my carbon footprint.
- As a user, I want the quiz/calculator to be based on hard science, but relayed to me in an easily digestible way.
- As a user, I want resources that further my understanding about climate change.

### Beyond MVP
- As a user I would like to be able to login and out to access my profile and previous quiz responses
- As a user I would like to be able to post and interact with other EarthBFF's on the community bulletin board
- As a user, I would like the quiz to have may different aspects of my life and choices reflected in the calculator (beyond just the main categories)

## Backend Models 

User Model
- Email
- Password
- Username

Question Model
- Text
- Description

Response Model
- Question foreign key
- Text
- Carbon_output 

Post Model
- Body
- Date
- Title

## React Component Hierarchy
![Screen Shot 2020-12-07 at 5 15 32 PM](https://media.git.generalassemb.ly/user/30933/files/d5a93300-38af-11eb-9874-a18b604a868e)

## Wireframes

![Screen Shot 2020-12-07 at 5 16 18 PM](https://media.git.generalassemb.ly/user/30933/files/ee194d80-38af-11eb-8dbf-98feb5dd457d)

![Screen Shot 2020-12-07 at 5 16 41 PM](https://media.git.generalassemb.ly/user/30933/files/fbced300-38af-11eb-997a-f01abe44eccb)
