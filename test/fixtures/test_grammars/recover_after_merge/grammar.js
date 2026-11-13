// Error recovery must return to an earlier parse state after two stack versions
// merge in the error state. Otherwise valid items before an error end up inside
// an ERROR root.

export default grammar({
  name: 'recover_after_merge',

  extras: $ => [/\s/, $.comment],

  rules: {
    source_file: $ => repeat($.item),

    item: $ => seq('(', $.name, ')'),

    name: _ => /[a-z]+/,

    comment: _ => /#[^\n]*/,
  },
});
