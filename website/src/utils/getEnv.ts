import moment from 'moment';
const execSync = require('child_process').execSync;

export interface ENV {
  [key: string]: string;
}

const COMMITHASH_COMMAND = 'rev-parse HEAD';
const VERSION_COMMAND = 'describe --always';
const BRANCH_COMMAND = 'rev-parse --abbrev-ref HEAD';

/**
 * 读取 env 文件内容
 * @returns
 */
export function getGlobalEnv() {
  // 全局 env 变量
  let globalEnv: ENV = {};

  // 抓取 env 里面 以APP_开头的变量 赋值给 umi config define
  for (let key in process.env) {
    if (key.startsWith('APP_')) {
      globalEnv[key] = process.env[key] || '';
    }
  }

  globalEnv['Revision'] = `${execSync(`git ${COMMITHASH_COMMAND}`)}`.trim();
  globalEnv['Branch'] = `${execSync(`git ${BRANCH_COMMAND}`)}`.trim();
  globalEnv['Release'] = `${execSync(`git ${VERSION_COMMAND}`)}`.trim();
  globalEnv['PackingTime'] = moment().format('YYYY-MM-DD HH:mm:ss');

  return globalEnv;
}
