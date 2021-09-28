
function git_branch() {
  local BRANCH=$(git branch --no-color 2> /dev/null | sed -e "/^[^*]/d" -e "s/* \(.*\)/\1/")
  [[ -n $BRANCH ]] && echo $BRANCH || echo '?'
}

alias pr="open 'https://github.com/jhkuperus/$(basename `pwd`)/pull/new/$(git_branch)'"
alias ci="open 'http://localhost:8081/job/$(basename `pwd`)'"

export SESSION_DANGER="DEMO"

clear



