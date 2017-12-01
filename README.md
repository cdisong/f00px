# F00px

F00px is a photo hosting webpage inspired by 500px. Utilizing React-Redux on the frontend and Ruby on Rails for the backend with a PostgreSQL database, F00px features a minimalistic design intended to keep focus centered on the content. 
 
[F00px live!](https://f00px.herokuapp.com/) 


## Features 
### User Authentication
New users can create an account and existing users can log back in in order to view the photos of their network (followers and followings). Photos dashboard and network can only be viewed from a logged-in state, however, a 'Demo Login' feature is implemented on the sign in component for prospective members to explore the features of the site. 

![](https://github.com/cdisong/f00px/blob/master/f00px/app/assets/images/Screen%20Shot%202017-12-01%20at%2014.51.01.png) 
![](https://github.com/cdisong/f00px/blob/master/f00px/app/assets/images/Screen%20Shot%202017-12-01%20at%2014.51.15.png)


### Photos Dashboard
A photos dashboard loads the photos of the members associated with the user's network, i.e., the members who are followed by the user as well as the user's own photos. The dashboard also implements React-Modals to expand the details of the photos to display the username of the person who originally uploaded the photo as well as an optional description of the photo. 

![](https://github.com/cdisong/f00px/blob/master/f00px/app/assets/images/Screen%20Shot%202017-12-01%20at%2015.00.50.png)
![](https://github.com/cdisong/f00px/blob/master/f00px/app/assets/images/Screen%20Shot%202017-12-01%20at%2014.59.42.png) 


## Future Features 
* Convert photos upload option into modal. 
* Implement tags on dashboard nav bar to sort and categorize photos according to user preference. 
* Convert button styling to icons and implement infinite-scroll feature onto dashboard as well as followers and following containers. 
