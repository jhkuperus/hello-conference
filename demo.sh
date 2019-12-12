
function git_branch() {
  local BRANCH=$(git branch --no-color 2> /dev/null | sed -e "/^[^*]/d" -e "s/* \(.*\)/\1/")
  [[ -n $BRANCH ]] && echo $BRANCH || echo '?'
}

alias mr="open 'http://localhost/jhkuperus/$(basename `pwd`)/merge_requests/new?merge_request%5Bsource_branch%5D=$(git_branch)'"
alias ci="open 'http://localhost:8081/job/$(basename `pwd`)'"

export SESSION_DANGER="DEMO"

clear



