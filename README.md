Coverage: 64.7%
# Week 8 Recipe Project

This is my week 8 solo project on the QA training course. It involved setting up a database with tables for customers, items and orders, and necessitated a go-between table, order_items to handle an items-orders many to many relationship. Code to produce a variety functions was needed through Java, and connections required to link the two.

## Getting Started

I have compiled my code into a FatJar for your convenience. You should only need to open up the file wherever you have downloaded it, and double click on the .jar file.

### Prerequisites

You will require SQL Workbench to visualise the information in my sql-schema and sql-data files, though you can open these in your preferred IDE if you prefer. For testing, Maven will be required. gitBash required to build in bash or console.

### Building

To build my code, you should be able to enter the W8PRRecipeProject project, and open a gitBash terminal there. Type in "mvn clean package" to build a new fatjar, and run with only the commands "java -jar ims-0.0.1-jar-with-dependencies".  This will open my java executable in a console for you to interact with. All methods function, and all options are supported by robust user-error capture and return.

## Running the tests

In order to run tests for my code, you can open the code in your preferred IDE and navigate to the top level of the src/test/java file. In Eclipse, you can then "Launch java" and it will run automated tests. For coverage details, you will also need to view coverage history, which in Eclipse, is in the Run dropdown.

### Unit and Integration Tests 

I tested all of my core files. There are unit tests for my controller, domain, repos and services classes, plus further integration tests in my controllerTests class.

## Built With

* [Maven](https://maven.apache.org/) - Dependency and Build Management
* [Jira](https://atlassian.net/jira/) - Kanban board and epic/stories visualisation
* [Git](https://gitforwindows.org/) - Gitbash functionality for command line interface
* [Github](https://github.com/) - Repository management and integration with Jira for automatic Jira update
* [Confluence](https://rowanatwork.atlassian.net/wiki/spaces/~62751f6c7dd556006afefebc/pages/458753/Week+8+Project+Risk+Matrix) - Additional pages for risk matrices and further documentation
* [Mockito](https://site.mockito.org/) - Mocking dependencies for unit testing
* [Junit](https://junit.org) - Testing
* [MySQLWorkbench and Server](https://www.mysql.com/products/workbench/)

## Authors

* **Rowan Baker** - *Project and additional resources* - [Rowanas](https://github.com/Rowanas)

## License

This project is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) file for details 

## Acknowledgments

* As will likely be the case for any of my work going forward, a huge tip of the hat to the stackExchange community, whose years of questions provided many useful fixes.
* To Anoush, for deepening my understanding of HTML, CSS and JS, and teaching us to make a full stack application. 
* To the companionship and good humour of the rest of the 22AprEnable2 cohort, without which I would not have been able to push on to the project's end.