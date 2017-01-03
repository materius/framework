'use strict';

import requireDir from 'require-dir';

// Require all tasks in /tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });