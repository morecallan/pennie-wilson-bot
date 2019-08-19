// Description:
//   <description of the scripts functionality>
//
// Dependencies:
//   "<module name>": "<module version>"
//
// Configuration:
//   LIST_OF_ENV_VARS_TO_SET
//
// Commands:
//   hubot <trigger> - <what the respond trigger does>
//   <trigger> - <what the hear trigger does>
//
// Notes:
//   <optional notes required for the script>
//
// Author:
//   <github username of the original script author></github>


module.exports = (robot) => {
    robot.hear(/(.* )?advice.*/i,
        (res) => {
            robot.http('http://yerkee.com/api/fortune/wisdom')
            .get()((err, _, body) => {
                if (err) res.send('Pennie Wilson rejects your request.')
                if (body) {
                    const pennieStealsCredit = JSON.parse(body).fortune.split('\n\t\t')[0]
                    res.send(pennieStealsCredit)
                }
            })
        })
}