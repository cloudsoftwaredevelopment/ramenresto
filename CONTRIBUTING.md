# Contributing to Ramen Masters

Thank you for your interest in contributing to Ramen Masters! This document
provides guidelines and procedures for contributing to the project.

## Code of Conduct

By participating in this project, you are expected to uphold our community
standards:
- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## How to Contribute

### Reporting Issues
- Use the GitHub issue tracker
- Check if the issue already exists
- Provide detailed information including:
  - Steps to reproduce
  - Expected vs actual behavior
  - Browser/OS information
  - Screenshots if applicable

### Suggesting Enhancements
- Clearly describe the enhancement
- Explain the use case
- Provide examples if possible
- Consider impact on existing functionality

## Development Workflow

### Setting Up Your Environment
1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/ramenresto.git`
3. Create a feature branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Test thoroughly
6. Commit with conventional commit messages
7. Push to your fork
8. Create a Pull Request

### Branch Naming Convention
- `feature/feature-name` - New features
- `bugfix/issue-name` - Bug fixes
- `docs/documentation-update` - Documentation changes
- `refactor/refactoring-name` - Code refactoring
- `hotfix/critical-fix` - Urgent fixes

### Commit Message Guidelines
Follow conventional commit format:
```
type: brief description

Detailed explanation (optional)

- Specific changes made
- Reason for changes
- Impact if significant

Closes #123 (if applicable)
```

**Commit Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks

### Example Commit Messages
```
feat: add local storage persistence for shopping cart

Implement localStorage to save cart items between sessions.
This prevents data loss when users refresh or close the browser.

Closes #45
```

```
fix: resolve line break issues in JavaScript functions

Clean up line breaks that were causing parsing errors in
certain browser environments. All multi-line statements
have been consolidated to single lines.

Fixes #67
```

## Code Standards

### JavaScript
- Use ES6+ features where appropriate
- Maintain consistent indentation (4 spaces)
- Keep lines under 100 characters
- Use meaningful variable and function names
- Comment complex logic
- Avoid global variables when possible
- Follow existing code patterns

### HTML
- Semantic HTML5 elements
- Proper accessibility attributes
- Clean, well-structured markup
- Consistent indentation

### CSS
- Use CSS variables for theming
- Mobile-first approach
- Clear class naming conventions
- Efficient selectors
- Responsive design principles

### Example Code Style
```javascript
// Good
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price + item.addons.reduce((sum, addon) => sum +
addon.price, 0);
        total += itemTotal;
        // ... rest of implementation
    });
}

// Avoid
function updateCart()
{
    cartItems.innerHTML='';
    let total=0;
    // ... inconsistent formatting
}
```

## Testing

### Manual Testing
- Test all user flows
- Check responsive behavior
- Verify cross-browser compatibility
- Test edge cases

### Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Pull Request Process

### Before Submitting
1. Ensure your code follows the style guidelines
2. Test your changes thoroughly
3. Update documentation if needed
4. Write clear, descriptive pull request titles
5. Reference related issues

### Pull Request Template
```
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## How Has This Been Tested?
Description of testing performed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No conflicts with main branch
```

## Documentation Updates

When adding new features:
- Update README.md if needed
- Add/modify documentation in docs/ folder
- Update code comments for complex logic
- Include usage examples

## Questions or Help

If you need help or have questions:
1. Check existing issues and documentation
2. Open a new issue with your question
3. Tag with appropriate labels (question, help wanted)

## Recognition

Contributors will be recognized in:
- Git commit history
- GitHub contributors list
- Project documentation (for significant contributions)

Thank you for contributing to Ramen Masters!

