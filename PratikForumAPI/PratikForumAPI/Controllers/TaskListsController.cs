using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using PratikForumAPI.Models;

namespace PratikForumAPI.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class TaskListsController : ControllerBase
    {
        private readonly PratikForumAPIDBContext _context;

        public TaskListsController(PratikForumAPIDBContext context)
        {
            _context = context;
        }

        // GET: api/TaskLists
      
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskList>>> GetTaskList()
        {
            return await _context.TaskList.ToListAsync();
        }

        // GET: api/TaskLists/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TaskList>> GetTaskList(int id)
        {
            var taskList = await _context.TaskList.FindAsync(id);

            if (taskList == null)
            {
                return NotFound();
            }

            return taskList;
        }
        // GET: api/TaskLists/5



        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Models.Task>>> GetTaskItems(int id)
        {
          return await _context.Task.Where(a => a.TasklistId == id).ToListAsync();

        }

        // PUT: api/TaskLists/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskList(int id, TaskList taskList)
        {
            if (id != taskList.TaskListId)
            {
                return BadRequest();
            }

            _context.Entry(taskList).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaskListExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TaskLists
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
       
        [HttpPost]
        public async Task<ActionResult<TaskList>> PostTaskList(TaskList taskList)
        {
            _context.TaskList.Add(taskList);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTaskList", new { id = taskList.TaskListId }, taskList);
        }
        [HttpPost]
        public async Task<ActionResult<TaskList>> TaskKaydet(Models.Task task)
        {
            _context.Task.Add(task);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTaskItems", new { id = task.TasklistId }, task);
        }

        // DELETE: api/TaskLists/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TaskList>> DeleteTaskList(int id)
        {
            var taskList = await _context.TaskList.FindAsync(id);
            if (taskList == null)
            {
                return NotFound();
            }

            _context.TaskList.Remove(taskList);
            await _context.SaveChangesAsync();

            return taskList;
        }

        private bool TaskListExists(int id)
        {
            return _context.TaskList.Any(e => e.TaskListId == id);
        }
    }
}
