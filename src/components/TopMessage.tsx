export default function TopMessage({ message }: { message: string }) {
    return (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-10000 p-2 bg-(--surface-strong) border border-(--line) rounded-xl shadow-lg">
            {message}
        </div>
    );
}
