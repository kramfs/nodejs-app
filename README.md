<snippet>
  <content><![CDATA[
# ${1:Project Name}

A very crude and simple nodejs application that process URL string query and act on the content. This is tested on a Mac but should work on a Linux and Windows docker.

- Frontend is served by nginx over port 8000-HTTP and 8443-HTTPS (self-signed cert) running under the 
`nginx` user. This is publicly exposed and accessible to the user.
       
- Backend is a nodejs application listening on private port 5000 running under the `node` user.
       
- Datastore is a MySQL database using the `MYSQL_USER`/`MYSQL_PASSWORD` credential. The `MYSQL_ROOT_PASSWORD` is randomly generated.
    

## Prerequisite
1. Docker
2. Docker compose
3. Free port 8000 and 8443 on the local machine. The ports can be customized in the docker-compose if needed.

## Installation

DOCKER-COMPOSE
1. Clone the repo: `git clone git@github.com:kramfs/nodejs-app.git`
2. Chdir to the cloned repo: `cd nodejs-app`
3. Rename the `.env.template` to `.env`. This utilizes a docker-compose build to create the application and uses an environment variable file to populate the needed data. This is the credentials for the MySQL database which is sensitive info and the file is shared with the nodejs-app so it can connect to the database.
4. That's it, let build the app: `docker-compose build`
5. Run the app: `docker-compose up`. Add `-d` parameter to dun in daemon mode.
6. Stop it by interrupting the process with ctrl+c or `docker-compose down` if run with `-d` parameter (daemon mode)

MAKEFILE
1. Clone the repo: `git clone git@github.com:kramfs/nodejs-app.git`
2. Chdir to the cloned repo: `cd nodejs-app`
3. Build and run the app with: `make`
4. Clean up: `make clean`

## Usage

 `/GET` https://localhost:8443/ - index site
        
 `/GET` https://localhost:8443/users - Main page for showing users record.
        
 `/GET` https://localhost:8443/users/get?username=johnd - Search for a user based on the username and return the full name. If there is no record exist for the user, display a user not found message.
        
 `/POST` https://localhost:8443/users/set?username=johnd&name=John&lastname=Doe - Expect 3 inputs with `key=value` format and delimited by `&` ampersand. Gather the inputs and save them to the database.



## TODO

Adopt the docker-compose file and create a deployment plan for Kubernetes

## History

TODO: Write history


## License

TODO: Write license
]]></content>
  <tabTrigger>readme</tabTrigger>
</snippet>
