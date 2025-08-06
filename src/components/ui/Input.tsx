import { InputHTMLAttributes, forwardRef } from 'react';

/**
 * Props for the Input component
 */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

/**
 * Reusable Input component with Primr branding
 * @param label - Input label text
 * @param error - Error message to display
 * @param helperText - Helper text to display
 * @param className - Additional CSS classes
 * @param props - Other input props
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    const inputClasses = `
      w-full px-4 py-3 border-2 rounded-lg transition-colors duration-200
      focus:outline-none focus:ring-2 focus:ring-[#ce1620] focus:border-transparent
      ${error ? 'border-red-500' : 'border-gray-300 hover:border-[#ce1620]'}
      ${className}
    `;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-[#1a1a1a] mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={inputClasses}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-600">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
