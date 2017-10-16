/**
 * Date: 2017/10/16
 * Author: Zn
 * Email: 312073339@qq.com
 */
import uuidv4 from 'uuid/v4';
export default {
    //生成唯一标识字符
    createUniqueId () {
        var buf  = uuidv4();
        return buf.split('-').join('');
    },
}