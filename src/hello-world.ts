export const hello = (user = 'world', userName ?:string) => {
	return 'Hello ' + user + (userName ? ' ' + userName : '') + '!';
}