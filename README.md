# QA_automation_test_task

This is implementation of QA Automation test task by Pecode. 

### Here is the task list: 
1. Write an automation script using a Javascript testing framework which will open:
https://www.pecodesoftware.com/qa-portal/greet.php page
1. Create an environment file and pick up all the credentials values from there.
2. Fill in the “Username” and “Password” input fields and click the “LogIn” button.
3. Use an assertion library and verify that all the elements are present on the page.
4. Verify that all the error messages appear.
5. Create a test-case that will fail because of unsuccessful login.
6. Use a page-object pattern or app actions.
7. The result of execution should generate:  
   - A mochawesome report file. 
   - Screenshots for failing the test. 
   - Video recording for all the tests.
8. Optional - wrap the tests into a docker container.
9. Post the code (without node_modules) to the public Github repository and provide a link.

### Implementation
Made using cypress v.10.3.0 

To run this test task make `git clone https://github.com/claimsecond/QA_automation_test_task` in terminal and then
1. Go to the project folder and run `npm install`
2. Pull the docker image with cypress preinstalled `docker pull cypress/included:10.3.0`
3. Run the docker using following command 
```shell
docker run -it -v $PWD:/e2e -w /e2e cypress/included:10.3.0
``` 
or 
```powershell
docker run -it -v ${PWD}:/e2e -w /e2e cypress/included:10.3.0
``` 
if you're running Windows 

After all the tests are ran the report will be in `mochawesome-report` folder, video of the testrun - in the `cypres/videos`, screenshots of the failed tests - in the `cypress/screenshots` folder inside the originally mapped e2e folder.
