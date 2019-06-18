#FIXES
- validation to make sure app won't crash because of null exception
- validation to protect db routes from duplicate error etc.
- UI: checker component used in checkbox and employee deletion mechanics, make more saturated
when checked
- everywhere replace Promise.all with update operations
- check what happens if no avatar is set in create_employee_modal
- figure out how to properly delete many employees in a way that it will trigger hooks on schema
- better design for file input
- finish metrics deletion
- move utils into separate lib
- constants for server messages
- add to front webpack aliases a $
- in logout, replace setting negative cookies to res.clearCookie of express
- deleteEmployee - ENOENT: no such file or directory, stat '/vagrant/src/server/front/dist/index.html
- user in app module must be initially unset
- employees list flex-wrap
- comments everywhere to understand the design of system
- format every single db output, data must be beautiful. Consider automatic format:
    - _id to id transition
    - __v deletion
    - listId creation in lists
    - id.toString() cast

#FEATURES
- grouping for measures (soft, hard skills, etc.). Personal measures
- rework measures gui so that it will be obvious that metrics' rates are collaborative
- adaptive design
- only one employee deletion by contextmenu
- logger for server app