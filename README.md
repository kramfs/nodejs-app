<snippet>
  <content><![CDATA[
# ${1:Project Name}

A very crude and simple nodejs application that process URL string query and act on the content. This is tested on a Mac but should work on a Linux and Windows docker.

- Frontend is served by nginx over port 8000-HTTP and 8443-HTTPS (self-signed cert) running under the 
`nginx` user. This is publicly exposed and accessible to the user.
       
- Backend is a nodejs application listening on private port 5000 running under the `node` user.
       
- Datastore is a MySQL database using the `MYSQL_USER`/`MYSQL_PASSWORD` credential. The `MYSQL_ROOT_PASSWORD` is randomly generated.
    

## Pre-requisite
1. Docker
2. Docker compose
3. Free port 8000 and 8443 on the local machine. The ports can be customized in the docker-compose if needed.

## Installation

1. Clone the repo: `git clone` 
2. Chdir to the cloned repo: `cd nodejs-app`
3. This utilizes a docker-compose build to create the application and uses an environment variable file to populate the needed data. Rename the `.env.template` to `.env`.
4. Populate the `.env` file, basically, credentials for the MySQL database which is sensitive info and the file is shared with the nodejs-app so it can connect to the database. When updating the DB credentials, we only change in one place.
5. That's it, let build the app: `docker-compose build`
6. Run the app: `docker-compose up`


## Usage

 `/GET` http://localhost:8443/ - index site
        
 `/GET` http://localhost:8443/users - Main page for showing users record.
        
 `/GET` http://localhost:8443/users/get?username=johnd - Search for a user based on the username and return the full name. If there is no record exist for the user, display a user not found message.
        
 `/POST` http://localhost:8443/users/set?username=johnd&name=John&lastname=Doe - Expect 3 inputs with `key=value` format and delimited by `&` ampersand. Gather the inputs and save them to the database.



## TODO

Adopt the docker-compose file and create a deployment plan for Kubernetes

## History

TODO: Write history


## License

TODO: Write license
]]></content>
  <tabTrigger>readme</tabTrigger>
</snippet>