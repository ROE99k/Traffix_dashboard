type Props = {
  direction: "north" | "south" | "east" | "west";
  isActive: boolean;
};

export function CameraFeed({ direction, isActive }: Props) {
  const videoSrc = `/videos/${direction}.mp4`;

  return (
    <div className="bg-muted rounded-md p-4 flex flex-col items-center justify-center">
      <div className="text-sm font-semibold mb-2">
        {direction.charAt(0).toUpperCase() + direction.slice(1)}
      </div>
      <div className="bg-slate-100 w-full h-36 flex flex-col items-center justify-center rounded">
        <video
          src={videoSrc}
          controls
          autoPlay
          loop
          muted
          className="w-full h-full rounded"
        />
        <div className="text-sm text-muted-foreground mt-2">
          {isActive ? "Live Feed" : "Standby"}
        </div>
      </div>
    </div>
  );
}

export function AllDirections() {
  const directions: ("north" | "south" | "east" | "west")[] = [
    "north",
    "south",
    "east",
    "west",
  ];

  // You can control which directions are active here:
  const activeStatus = {
    north: true,
    south: false,
    east: true,
    west: false,
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {directions.map((dir) => (
        <CameraFeed key={dir} direction={dir} isActive={activeStatus[dir]} />
      ))}
    </div>
  );
}
