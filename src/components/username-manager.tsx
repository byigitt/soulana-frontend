import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Edit2 } from "lucide-react";

interface UsernameManagerProps {
  walletAddress: string;
  currentUsername: string | null;
  onUsernameUpdate: (newUsername: string) => void;
}

export function UsernameManager({ 
  walletAddress, 
  currentUsername, 
  onUsernameUpdate 
}: UsernameManagerProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(currentUsername || "");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          walletAddress,
          username,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Kullanıcı adı güncellenemedi");
      }

      onUsernameUpdate(data.user.username);
      setIsEditing(false);
      toast.success("Kullanıcı adı başarıyla güncellendi!");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Kullanıcı adı güncellenemedi");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isEditing) {
    return (
      <div className="flex items-center gap-2">
        <p className="text-sm text-red-800/60 dark:text-rose-100/60">
          {currentUsername || "Kullanıcı adı belirlenmemiş"}
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsEditing(true)}
          className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
        >
          <Edit2 className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <Input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Kullanıcı adını girin"
        pattern="^[a-zA-Z0-9_-]{3,20}$"
        title="Kullanıcı adı 3-20 karakter olmalı ve yalnızca harf, rakam, alt çizgi ve tire içerebilir"
        required
        className="max-w-[200px] bg-white/80 dark:bg-black/40"
        disabled={isLoading}
      />
      <Button
        type="submit"
        size="sm"
        disabled={isLoading}
        className="bg-red-600 hover:bg-red-700 text-white"
      >
        {isLoading ? "Kaydediliyor..." : "Kaydet"}
      </Button>
      <Button
        type="button"
        size="sm"
        variant="ghost"
        onClick={() => {
          setIsEditing(false);
          setUsername(currentUsername || "");
        }}
        disabled={isLoading}
        className="text-red-800/60 dark:text-rose-100/60"
      >
        İptal
      </Button>
    </form>
  );
} 
