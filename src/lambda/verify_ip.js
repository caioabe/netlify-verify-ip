exports.handler = async (event, _context, callback) => {
  const { IP_WHITELIST } = process.env;
  const whitelist = IP_WHITELIST.split(',');
  const request_ip = event.headers['client-ip'];
  const whitelist_string = whitelist.join('\n');
  const isAuthorized = whitelist.includes(request_ip);
  const body = `Authorized: ${isAuthorized}\nRequest IP: ${request_ip}\n---\nWhitelist:\n${whitelist_string}`;
  const statusCode = isAuthorized ? 200 : 400;

  callback(null, {
    statusCode,
    body
  });
}
