export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-gray-600">
          AI Engineering Hub &middot; &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
