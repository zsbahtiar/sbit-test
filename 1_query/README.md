- Export database from `1_query/sbit-test.sql` @ mysql
`SELECT USER.ID as ID, USER.UserName as UserName, Parent.UserName as ParentUserName FROM user LEFT JOIN Parent ON Parent.ID = USER.Parent ORDER BY USER.ID ASC`
![Result](1_query/images/result.png)
![Parent Table](1_query/images/parent.png)
![User Table](1_query/images/user.png)