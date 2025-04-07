interface Props {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export const MobileMenuToggle: React.FC<Props> = (props) => {
  const { isMobileMenuOpen, toggleMobileMenu } = props;

  return (
    <button onClick={toggleMobileMenu} aria-label='Toggle mobile menu' className='p-2 focus:outline-none'>
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
