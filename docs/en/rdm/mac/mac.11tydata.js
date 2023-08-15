module.exports = function() {
  return {
    layout: 'layouts/markdown.njk',
    trees: ['rdm/mac'],
    tree: 'rdm/mac',
    searchTags: [
      { 'label': 'Remote Desktop Manager', 'facet': 'doc' },
      { 'label': 'mac', 'facet': 'os' }
    ]
  }
}