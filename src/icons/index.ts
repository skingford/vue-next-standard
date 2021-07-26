/*
 * @Author: kingford
 * @Date: 2021-07-26 14:36:06
 * @LastEditTime: 2021-07-26 14:46:26
 */

const modules = import.meta.globEager('./svg/**/*.svg');

// Object.keys(modules).forEach((key) => {
//   const mod = modules[key].default;
//   console.log(mod);
// });

const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);

requireAll(modules);
