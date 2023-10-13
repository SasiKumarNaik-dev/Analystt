
**BLOGS-APP**

This is a simple application that Which displays the blogs list that retrived from the api.

## FrontEnd

- When the app is opened, Home Route will be displayed
- When the Home Route is opened,
  - Make HTTP GET request to the **blogsApiUrl**
  - **_loader_** will be displayed while fetching the data
  - After fetching the data, the list of blogs will be displayed
- When a blog item in Home Route is clicked,
  - Page will be navigated to the Blog Item Details Route with the URL `/blogs/:id`
- When the Blog Item Details Route is opened,
  - Make HTTP GET request to the **blogItemDetailsApiUrl** with the blog id to get the details of the blog
    - Example: `https://apis.ccbp.in/blogs/2`
  - **_loader_** will be displayed while fetching the data
  - After fetching the data, the details of the blog will be displayed


## BackEnd

- In the backend the MongoDb database is used for to store data and retrive data
- the MongoDb atlas is provided cloud base data storage
- there are two api's are provided they are
 
 **blogsApiUrl**

#### API: `http://localhost:3008/blogs`

#### Method: `GET`

#### Description:

Returns a response containing the list of all blogs

#### Response

```json
[
  {
    "id": 1,
    "title": "React v16.9.0 and the Roadmap Update",
    "image_url": "https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png",
    "avatar_url": "https://miro.medium.com/max/4096/1*wiOSfPd2sY0gXSNK9vv6bg.jpeg",
    "author": "Dan Abramov,",
    "topic": "React.js"
  },
  ...
]
```

**blogItemDetailsApiUrl**

#### API: `http://localhost:3008/blogs/:id`

#### Example: `http://localhost:3008/blogs/65269ca9e29e4072d0325162`

#### Method: `GET`

#### Description:

Returns a response containing the details of the specific blog

#### Response

```json
{
  "_id": 65269ca9e29e4072d0325162,
  "title": "React v16.7: No, This Is Not the One With Hooks",
  "image_url": "https://miro.medium.com/max/3158/1*kEPCQNY4dwVyaFuLEwJcNQ.png",
  "avatar_url": "https://avatars.githubusercontent.com/u/3624098?v=4",
  "author": "Andrew Clark",
  "content": "React follows semantic versioning. Typically, this means that we use patch versions for bugfixes, and minors for new (non-breaking) features. However, we reserve the option to release minor versions even if they do not include new features. The motivation is to reserve patches for changes that have a very low chance of breaking. Patches are the most important type of release because they sometimes contain critical bugfixes.",
  "topic": "React.js"
}
```

**Instruction to run the application**

- From this public repository you have clone it to the local repository.
- Then you have run two applications differently
- please install npm package manager into your system

## For Frontend
 - npm install
 - npm start

## For Backend
 - npm install nodemon --save
 - nodemon app.js

**NOTE**
- And make sure that port 3008 doesn't run anything and for frontend application you have to run
- please install suitable packages if it shows any error like package not found


