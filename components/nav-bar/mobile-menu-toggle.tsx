interface Props {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export const MobileMenuToggle: React.FC<Props> = (props) => {
  const { isMobileMenuOpen, toggleMobileMenu } = props;

  return (
    <button
      type='button'
      onClick={toggleMobileMenu}
      aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={isMobileMenuOpen}
      aria-controls='mobile-navigation'
      className='hover:text-accent focus-visible:outline-accent -mr-2 rounded-md p-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 md:hidden'
    >
      <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
        {isMobileMenuOpen ? (
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
        ) : (
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
        )}
      </svg>
    </button>
  );
};
