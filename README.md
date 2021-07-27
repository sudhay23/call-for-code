# IBM - Call For Code 



To run the Web App, clone the repository and follow these steps: 
```
cd react-frontend
```
```
npm install
```
```
npm start
```



Prototype Web App hosted on IBM Cloudfoundry (Bluemix) : https://wuse.eu-gb.mybluemix.net/

## A short video about the app 

https://user-images.githubusercontent.com/65719940/127198752-81fa4edf-48f9-4bc1-9428-a59adc9530bf.mp4



## Mentor : 
Mr. Sulakshan Vajipayajula  


## Team members (Amrita School of Engineering, Coimbatore)

- Darshan S.
- Amrith V
- Sudhay Senthilkumar
- Sandeep Rajakrishnan

## Problem

- Waste management is an equally important activity as the actual production of any goods. 
- On exploration, we understand that only around 9% of plastic or similar waste sent for recycling is actually recycled. 
- Thus, the alternative approach that we can consider for remaining 91% of the waste is to find the appropriate consumer who can possibly “reuse” some of the waste.


## Our Solution

- “wUse” is the platform that helps in finding the right consumer for one’s waste. 
- This platform will be based on the idea of producers of waste which can be categorised as Reusable/Recyclable making listings where reusable waste (the kind of waste that can be directly reused or used with minimal processing) can find it’s consumer through an auction where the producer gets a fair price. 
- Recyclable waste on the other hand can be directly routed to the nearest recycling unit who can perform further processing on such waste. 
- The platform also can provide intelligent suggestions on the usage of eco-friendly alternative products that the user might not be aware of at the time of user registration.

## Features

- A space to provide ideas to reduce the production of waste / non-recyclable wastes by replacing the current raw materials by introducing less known newly discovered facts about alternative materials to the industries. For example, Compostable coatings, 'Plastic' made from wood, Packaging from food waste, Recyclable packaging with help of magnets can be some of the suggestions for a company that uses Plastic as part of its manufacturing activities.
- A rating system for each user of the platform. 
- The company wishing to reuse the waste would be given a time period during which the product is available in the market (auction). After the time period the company will be suggested recycling units nearby. The max duration to participate in the auction will be decided by the rating of that particular company from a minimum time of 6 hrs to a max time of 2 days. → based on the reputation earned by the company in previous auctions.

- This platform aims to effectively consume the waste however feasible so if the producer doesn’t think reuse or recycle is within his comfort zone there will be tips in other ways he could use the waste effectively depending upon the category of the waste such as composting and energy production. Treatment or disposal of waste will be considered only in worst cases.

### Waste Management Hierarchy

![hierarchy](https://19january2017snapshot.epa.gov/sites/production/files/styles/large/public/2015-09/waste_hierarchy_green_400pxw.png)


## Tech Stack

- App deployed on IBM Cloud foundary
- Database → IBM Cloudant → (Users, Product Listings)
- Frontend → ReactJS
- Backend → NodeJS
- IBM Watson Natural Language Understanding/IBM Watson Assistant - Chatbot for handling user queries and accessing knowledge base about usage of alternative raw materials.

## Roadmap
![c4cRoadmap](https://user-images.githubusercontent.com/65719940/127192833-82bea20a-c9da-4103-b825-0f6c45bc19e3.png)

## Overall Workflow
- “Auction slots” will be decided by the PLATFORM which can be chosen to participate by the Waste Producers -- Decide frequency based on demand
  - Register on the platform - As Company/Recycling Unit
  - Name, Address, Contact, Types Of Waste - (Recyclable/Reusable) (classified under categories we provide - will be recommended by the platform)
- Users can access the chatbot for addressing queries related to the platform. Users can request for nearby recycling units or filter out required waste to consume as well.

## Waste Producer - Workflow
- Login to the platform by Credentials (Under “Waste Producer” role)

- If their company wishes to participate in the auction, they choose an available slot and publish a product listing (if it is REUSABLE)
- If their company wishes to recycle the waste generated, recycling units nearby will be suggested and direct messages between them can be used to arrive at a price that the WASTE PRODUCER will pay to recycle. (if it is RECYCLABLE)

- History of user activity on the platform can be viewed.
		
## Waste Consumer - Workflow

	
- Login to the platform by Credentials (Under “Waste Consumer” role)

- “What would you like to explore today?” → Question asked to filter out from active auctions → Only 1 active bid possible

- Posting a Bid in an Auction → the following parameters will help to arrive at the carbon footprint projection for bidders of the auction → this helps to decide the reputation of the company that is holding the auction:
  - Enter the quantity required
  - Enter the mode of transportation (EV/Petrol/Diesel)
  - Enter the delivery destination

						
- History of user activity on the platform can be viewed.


## Recycling Units - Workflow
- Login with credentials

- Can view the active proposals from Waste producers to recycle their waste.

- Have the ability to chat with the companies who proposed to recycle their waste with them to arrive at the final price.










