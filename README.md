# CTFdiscord
## Features
- Connect to CTFd through its REST API
- By-user token access
- Watch for notifications
- Watch for new challenges
  
## Admin configuration
These commands are only allowed to the server's administrators

- [ ] `/get {option}`, show option description, current value and default value
- [ ] `/set {option} {value}`, set given value to given option

### Options
- [ ] `notif_watcher_freq`, notification retrieval frequency in seconds. Default `60`
- [ ] `chall_watcher_freq`, new challenges retrieval frequency in seconds. Default `60`
- [ ] `allow_team_cmd`, allow non-auth users to execute team-related commands, Default `true`

## By-user configuration
Access token and CTFd API URL are saved independently for each user.

Commands related to the whole team can be optionally allowed for users that aren't authenticated with `options.allow_team_cmd`.

- [ ] `/session`, show info about current session
- [ ] `/session {ctf_url} [{token}]`, initiate a new session on given url
- [ ] `/token {token}`, set your access token for this session

## Slash commands
  - [ ] `/flag`, validate flags
  - [ ] `/score`, show scoreboard
  - [ ] `/challs`, list challenges
    - [ ] `/chall {chall}`, show details about given chall
    - [ ] `/solves {chall}`, show solves of given chall

## Watch for notifications
- [ ] get `api/notifications` every `options.notif_watcher_freq` seconds
- [ ] embed new notifications' info
- [ ] `/notify {regexp}`, get highlighted when notif matches

## Watch for new challenges
- [ ] get `api/challenges` every `options.chall_watcher_freq` seconds
- [ ] maintain a local list of challenges
- [ ] notify when new challenges are found