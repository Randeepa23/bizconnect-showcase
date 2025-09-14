const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">BizConnect</h3>
            <p className="text-primary-foreground/80 max-w-md mx-auto leading-relaxed">
              Built by Randeepa Ariyawansa to help your business grow online.
            </p>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 BizConnect. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;