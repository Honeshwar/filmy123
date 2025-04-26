
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInModal = ({ isOpen, onClose }: SignInModalProps) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });

  // Add effect to prevent page scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSignIn) {
      // Mock sign-in success
      toast.success("Signed in successfully!");
      onClose();
    } else {
      // Mock sign-up success
      toast.success("Account created successfully!");
      setIsSignIn(true);
    }
  };

  const toggleMode = () => {
    setIsSignIn(!isSignIn);
    setFormData({ email: "", password: "", name: "" });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm overflow-y-auto py-10">
      <div className="relative w-full max-w-md bg-tubiPurple p-8 rounded-xl border border-white/10 shadow-2xl m-4">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-white/60 hover:text-white"
        >
          <X size={20} />
        </button>
        
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            {isSignIn ? "Sign In" : "Create Account"}
          </h2>
          <p className="text-white/70">
            {isSignIn 
              ? "Sign in to access your account and enjoy unlimited streaming" 
              : "Join Tubi Vision for free and start streaming thousands of movies and TV shows"}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isSignIn && (
            <div>
              <label htmlFor="name" className="block text-white mb-2">Name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required={!isSignIn}
                className="bg-tubiPurple/70 border-white/20 text-white"
                placeholder="Your name"
              />
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-tubiPurple/70 border-white/20 text-white"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-white mb-2">Password</label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="bg-tubiPurple/70 border-white/20 text-white"
              placeholder="Your password"
            />
          </div>
          
          {isSignIn && (
            <div className="text-right">
              <a href="#" className="text-tubiYellow hover:underline text-sm">
                Forgot password?
              </a>
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full bg-tubiYellow text-tubiPurple hover:bg-tubiYellow/90 mt-2"
          >
            {isSignIn ? "Sign In" : "Create Account"}
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-white/70">
            {isSignIn ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={toggleMode}
              className="ml-2 text-tubiYellow hover:underline"
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
